# MyMusicSpace

Tecniche e architetture avanzate per lo sviluppo del software (TAASS)
- Year 2023-24
- Prof. Giovanna Petrone

Students: 
- Aldo Rambaudo
- Corrado Picone
- Lorenzo Falchi
- Michele Colombino


---
# Package explorer
This section contains a quick refer to the package structure of the application
- **My Music Space**
    - **Back-end**: all the micro-services developed are located under the back-end folder
    - **Front-end**: the react application we developed

- **Spikes**: This folder contains all the principal spikes we work about during the project management
- **Kubernetes**: This folder contains all the kubernetes manifest used to initialize the minikube cluster

---
# How to run
This section contains a tutorial to update the images on Docker Hub (if needed) and set up the minikube cluster.

## Docker Hub
In the main folder there is a .sh (*docker-container-build*) which describe a list of sh command for build and update all the docker images needed for running the application. 
Here is the content of the file:

```bash
##### BUILD #####
docker build ./My\ Music\ Space//Back-end/chat-service --tag aamshaegar/chat-service:1.0.0
docker build ./My\ Music\ Space//Back-end/discovery-service --tag aamshaegar/discovery-service:1.0.0
docker build ./My\ Music\ Space//Back-end/log-service --tag aamshaegar/log-service:1.0.0
docker build ./My\ Music\ Space//Back-end/music-service --tag aamshaegar/music-service:1.0.0
docker build ./My\ Music\ Space//Back-end/shop-service --tag aamshaegar/shop-service:1.0.0 
docker build ./My\ Music\ Space//Front-end --tag aamshaegar/front-end:1.0.0 
docker build ./My\ Music\ Space//Back-end/auth-service --tag aamshaegar/auth-service:1.0.0 
docker build ./My\ Music\ Space//Back-end/api-gateway-service --tag aamshaegar/api-gateway-service:1.0.0


##### PUSH #####
docker push aamshaegar/chat-service:1.0.0
docker push aamshaegar/discovery-service:1.0.0
docker push aamshaegar/log-service:1.0.0
docker push aamshaegar/music-service:1.0.0
docker push aamshaegar/shop-service:1.0.0
docker push aamshaegar/front-end:1.0.0
docker push aamshaegar/auth-service:1.0.0
docker push aamshaegar/api-gateway-service:1.0.0

```
*Note: 'ivsnp' should be changed with your Docker Hub username, remember to updated the docker-compose and the minikube configuration.*



## Minikube [Linux]

First of all, install Minikube: https://minikube.sigs.k8s.io/docs/start/ 



**[First time]**

Run on terminal the following commands:

```bash
# create and start minikube using virtualbox with 4 cpus and 6GB of memory
minikube start --driver=virtualbox --cpus=4 --memory=6144

# enable metrics-server addon
minikube addons enable metrics-server

# enable ingress controller
minikube addons enable ingress

# get minikube ip
minikube ip
# example output: 
# 192.168.59.102

# add minikube ip to /etc/hosts file linking it to the app node ingresses
sudo nano /etc/hosts
# example edit:
# End of section
# 192.168.59.102  api.homates.it
# 192.168.59.102  webui.homates.it
# 192.168.59.102  eureka.homates.it
# 192.168.59.102  pgadmin.homates.it

# check edits on /etc/hosts file
cat /etc/hosts

# move to a specific namespace
kubectl config set-context --current --namespace=homates

# apply minikube manifests
kubectl apply -f ./kubeconf/homates-namespace.yaml
kubectl apply -f ./kubeconf/00_init/
kubectl apply -f ./kubeconf/01_dbs/
kubectl apply -f ./kubeconf/02_microservices/

# check ingress
kubectl get ingress --namespace=homates

# check pods status, more infos and wait untill all of them have 'Running' status, otherwise debug
watch kubectl get all -n homates

# check services
kubectl get services

# check persistent volumes
kubectl get pv

# check persistent volume claims
kubectl get pvc

# see usage metrics, needs metrics-server addon (two alternatives)
watch kubectl top pods

# stop minikube 
minikube stop
```

If it were necessary to have the public kubernetes cluster on cloud, it would be useful to use load balancer to improve traffic management:

```bash
# loadbalancer
minikube addons enable metallb
minikube addons configure metallb  # requires nginx deployment with multiple replicas
```



**[Run when Minikube is already set up]**

Run on terminal the following commands:

```bash
# start minikube
minikube start

# move to a specific namespace
kubectl config set-context --current --namespace=homates

# check ingress
kubectl get ingress --namespace=homates

# check pods status and wait untill all of them have 'Running' status, otherwise debug
watch kubectl get all -n homates

# check services
kubectl get services

# check persistent volume
kubectl get pv

# check persistent volume claim
kubectl get pvc

# see usage metrics, needs metrics-server addon (two alternatives)
watch kubectl top pods

# magic is in your hands

# stop minikube 
minikube stop
```



**[Debugging and other commands]**

Run on terminal the following commands:

```bash
# check minikube status
minikube status

# check ingress
kubectl get ingress --namespace=homates

# check pods status (two alternatives)
kubectl -n homates get pods -w
watch kubectl get all -n homates

# check pod logs (two alternatives)
kubectl describe pods pod-name-XXX
kubectl logs -f pod-name-XXX

# check services
kubectl get services

# check persistent volume
kubectl get pv

# check persistent volume claim
kubectl get pvc

# see usage metrics, needs metrics-server addon (two alternatives)
kubectl top pods
watch kubectl top pods

# apply configuration changes
kubectl apply -f ./kubeconf/...
```

