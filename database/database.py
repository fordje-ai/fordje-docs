from typing import List, Union

from beanie import PydanticObjectId

from models.admin import Admin
from models.codedoc import CodeDoc

admin_collection = Admin
codedoc_collection = CodeDoc


async def add_admin(new_admin: Admin) -> Admin:
    admin = await new_admin.create()
    return admin

async def retrieve_code_docs() -> List[CodeDoc]:
    codedocs = await codedoc_collection.all().to_list()
    return codedocs

async def add_code_doc(new_code_doc: CodeDoc) -> CodeDoc:
    code_doc = await new_code_doc.create()
    return code_doc

async def retrieve_code_doc(id: PydanticObjectId) -> CodeDoc:
    code_doc = await codedoc_collection.get(id)
    if code_doc:
        return code_doc


async def delete_code_doc(id: PydanticObjectId) -> bool:
    code_doc = await codedoc_collection.get(id)
    if code_doc:
        await code_doc.delete()
        return True


async def update_code_doc_data(id: PydanticObjectId, data: dict) -> Union[bool, CodeDoc]:
    des_body = {k: v for k, v in data.items() if v is not None}
    update_query = {"$set": {field: value for field, value in des_body.items()}}
    code_doc = await codedoc_collection.get(id)
    if code_doc:
        await code_doc.update(update_query)
        return code_doc
    return False
