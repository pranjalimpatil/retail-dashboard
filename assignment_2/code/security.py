from datetime import date
import hmac


from models.customer import CustomerModel
from models.sales import SalesModel
from resources.customer import CustomerRegister


def authenticate(username,password):
    # not able to provide validation by id
    user= CustomerModel.find_by_username(username)
    # if user is None:
        # return {"message":f"User with this name {username} doesnot exists. Please signup first"}
    # if not safe_str_cmp(user.password,password):
        # return {"message":f"Invalid Password"}
    #if user and safe_str_cmp(user.password,password) :
    if user and hmac.compare_digest(user.password, password):

        visitor=SalesModel(user.id,0,0,date.today())
        visitor.save_to_db()
        return user

def identity(payload):
    user_id=payload['identity']
    return CustomerModel.find_by_id(user_id)
