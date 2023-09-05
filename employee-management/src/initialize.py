# Initialize Firebase Admin SDK
import firebase_admin
from firebase_admin import credentials, firestore

cred = credentials.Certificate('path/to/your/firebase/credentials.json')
firebase_admin.initialize_app(cred)

# Access Firestore database
db = firestore.client()
