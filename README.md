# BigDataCloud Free Public Client IP API Client


A Javascript client for fetching the public IP address of a fronted user [BigDataCloud](https://www.bigdatacloud.com)
This client works without any Javascript dependencies and has no API key or account requirement... Simply load it up and you're ready to fetch the public IP address of your frontend users.

For more information about this API and how it works, [please click here.](https://www.bigdatacloud.com/docs/api/public-ip-address-api) 

## Documentation

Documentation specific to this Free API Client is detailed below.
For more information on other available APIs, please visit our [API area](https://www.bigdatacloud.com/docs).



## Authentication / Identification

There is no authentication or identification required to use this API or client.
You may use this API and client for Free without an account.



## Usage Limits

Important Notice: The API is free to use and imposes no throttling limits. However, responsible usage is expected. Excessive or unreasonable requests, such as repeatedly querying the same IP address at high volumes, are prohibited and may result in access being restricted. If you encounter errors or blocked connections despite following reasonable usage guidelines, please contact us for support.


## Manual Installation

1. Download the included javascript file and place it in a publically accessible location
2. Include the script tag `<script src="bigdatacloud_client_ip.js" type="text/javascript"></script>` before your code execution
3. Initiate the Client Info API Client as per the below example



## CDN Installation

1. Include the CDN script tag `<script src="https://cdn.jsdelivr/gh/bigdatacloudapi/js-client-ip-client@latest/bigdatacloud_client_ip.min.js" type="text/javascript"></script>` before your code execution
2. Initiate the API Client and make the required calls as necessary



## Example usage

```javascript
<script src="https://cdn.jsdelivr.net/gh/bigdatacloudapi/js-client-ip-client@latest/bigdatacloud_client_ip.min.js" type="text/javascript"></script>
<script type="text/javascript">

    getBDCClientIp(
        /* provide a callback function for receiving the client ip */
        function(result) {
            console.log(result);
        }
    );

</script>
```


## Example output

```javascript
{
    "ipString": "8.8.8.8",
    "ipType": "IPv4"
}
```
