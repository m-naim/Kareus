from dotenv.main import dotenv_values
from pymongo import MongoClient, ssl_support

config = dotenv_values("../.env")
client = MongoClient(config['DATABASE_URL'], ssl_cert_reqs=ssl_support.CERT_NONE)
db=client['investing']
# db= client
