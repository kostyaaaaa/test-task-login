#### Test task login

React + Express + Mysql

##### Configuring

Before starting, you need to configure envs for both client and server:

```bash
    cd ./server # navigate to server
    touch .env # create env file, check .env.example to see which envs are used

    cd ../client # navigate back to client
    touch .env # create .env file, check .env.example to see which envs are used

```

##### Development Mode

To run app in dev mode you can either run frontend and backend separately or use bash scripts:

```bash
    # starting all using bash scripts
    [sudo] bash install_dependencies.sh # this will install dependenices both in server and client parts
    [sudo] bash start_dev.sh # this will run server and client and output logs in one terminal
    #Note: when we have docker used, server and client will be in separate containers and will be run via docker-compose

    # starting separately
    cd ./server # navigate to server folder
    npm start # run server in dev mode

    cd ../client # navigate back to cleint
    npm start # run client in dev mode
```
