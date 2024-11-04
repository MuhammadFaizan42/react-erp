// dbconfig.js

module.exports = {
    user: "ADMIN",             // Replace with your database username
    password: "Siriustech@42",         // Replace with your database password
    connectString: "(description= (retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1522)(host=adb.me-jeddah-1.oraclecloud.com))(connect_data=(service_name=ga8d8f42709a2ee_siriuscloud_high.adb.oraclecloud.com))(security=(ssl_server_dn_match=yes)))" // This is in tnsnames.ora in the wallet
};