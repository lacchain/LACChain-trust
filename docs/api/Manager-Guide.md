### Chain Of Trust API

At a high level, Chain Of Trust provides the ability to any participant (A) to endorse Trust to their sub departments (B), So other entities (C) trusting A can thus to trust B. This may be especially useful for environments where a common layer of trust is needed between different organizations. With this feature enabled, for example, the Government of Surinam (C) can Trust some specific digital Health report issued by a Brazilian Health Care sub department (B) for a citizen in that Country; in this scenario it is assumed that Ministry of Surinam trusts the Ministry of Brazil; additionally the Ministry of Health of Brazil endorsed trust to its sub Health department thus allowing the Government of Surinam to trust some specific digital Health report issued by that Brazilian Health Care sub department.

* Interacting with this api is straightforward when using the interface provided via Swagger, just enter into the port exposed when running this service
and then you will find the following methods:
  * Create a manager: This requires just the DID (Decentralized Identifier) you obtained when interacted with the Identity methods. You can only create one manager for each entity. This method will allow you to create the manager through which you will endorse trust to other sub entities.
  * Get Manager: Returns the details of the manager created by the previous method. Basically a manager is just a sequence of characters called "address".
  * Add a trusted sub entity: TBD

To interact with this API you can just enter the Swagger exposed in: http://<HOST_WHERE_APP_IS_RUNNING>:<PORT>/docs/#/

<img src="../img/CoT-API.png" width="1100">

Or via Command-Line Interface:

```sh
api_url=http://localhost:3002 # Set LACChain Trust url
manager_url="$api_url"/api/v1/manager
```

* Create a manager

```sh
did="did:lac1:1iT5zJBHgKg82MjvPmgmS44ADf7TNqCHkJWViWdYad4hG9Jzm27ekXBsfMMg58GojJ24" # Replace this. Main Entity Did
validDays=100 # Number of days in which the manager to be created will be considered valid
add_manager_url=$manager_url
curl -X 'POST' \
  ${add_manager_url} \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "did": '\"$did\"',
  "validDays": 100
}'
```

* Get Manager

```sh
did="did:lac1:1iT5zJBHgKg82MjvPmgmS44ADf7TNqCHkJWViWdYad4hG9Jzm27ekXBsfMMg58GojJ24" # Replace this. Main Entity Did
get_manager_url="$manager_url"/"$did"
curl -X 'GET' \
  $get_manager_url \
  -H 'accept: application/json'
```