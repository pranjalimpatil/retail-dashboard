
from flask_jwt import jwt_required
from flask_restful import Resource
from models.product import ProductModel


class ProductList(Resource):

    @jwt_required()

    def get(self):
        prod1 = ProductModel(1,'A red top')
        prod1.save_to_db()
        prod2 = ProductModel(2, 'A black Shrug')
        prod2.save_to_db()
        prod3 = ProductModel(3, 'A black rain jacket')
        prod3.save_to_db()
        prod4 = ProductModel(4, 'A beige large size shirt')
        prod4.save_to_db()
        prod5 = ProductModel(5, 'A wide leg jeans')
        prod5.save_to_db()
        prod6 = ProductModel(6, 'A blue jumpsuit')
        prod6.save_to_db()
        prod7 = ProductModel(7, 'A red maxi dress')
        prod7.save_to_db()
        prod8 = ProductModel(8, 'A marron top')
        prod8.save_to_db()
        prod9 = ProductModel(9, 'A bootcut jeans')
        prod9.save_to_db()
        prod10 = ProductModel(10, 'A palazzo pant')
        prod10.save_to_db()

        return {"product_items": [x.json() for x in ProductModel.query.all()]}


