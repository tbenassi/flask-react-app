import os

from pymongo import MongoClient, ReturnDocument


class DBClient(object):
    def __init__(self):
        mongo_url = os.environ.get('MONGO_URL')
        self.db = MongoClient(mongo_url).kudos

    def increment(self, user):
        return self.db.test_collection.find_one_and_update(filter={'user': user},
                                                           update={'$inc': {'count': 1}},
                                                           return_document=ReturnDocument.AFTER,
                                                           upsert=True)

    def get_count(self, user):
        return self.db.test_collection.find_one_and_update(filter={'user': user},
                                                           update={"$setOnInsert": {"count": 0}},
                                                           return_document=ReturnDocument.AFTER,
                                                           upsert=True)

    def create(self, user):
        return self.db.test_collection.insert_one({
            'user': user,
            'count': 0
        })
