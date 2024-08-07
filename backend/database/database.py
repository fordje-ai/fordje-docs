from typing import List, Union

from beanie import PydanticObjectId

from models import CodeDoc, Ahj

codedoc_collection = CodeDoc
ahj_collection = Ahj

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
    return False

async def retrieve_code_doc_by_ahj(ahjId: PydanticObjectId) -> List[CodeDoc]:
    code_docs = await codedoc_collection.find_many({"ahjId": ahjId}).to_list()
    if code_docs:
        return code_docs
    return False

async def delete_code_doc(id: PydanticObjectId) -> bool:
    code_doc = await codedoc_collection.get(id)
    if code_doc:
        await code_doc.delete()
        return True
    return False


async def update_code_doc_data(id: PydanticObjectId, data: dict) -> Union[bool, CodeDoc]:
    des_body = {k: v for k, v in data.items() if v is not None}
    update_query = {"$set": {field: value for field, value in des_body.items()}}
    code_doc = await codedoc_collection.get(id)
    if code_doc:
        await code_doc.update(update_query)
        return code_doc
    return False

async def retrieve_ahjs() -> List[Ahj]:
    ahjs = await ahj_collection.all().to_list()
    return ahjs

async def add_ahj(new_ahj: Ahj) -> Ahj:
    ahj = await new_ahj.create()
    return ahj

async def retrieve_ahj(id: PydanticObjectId) -> Ahj:
    ahj = await ahj_collection.get(id)
    if ahj:
        return ahj
    return False

async def retrieve_ahjs_by_state(state_code: str) -> List[Ahj]:
    ahjs = await ahj_collection.find_many({"stateCode": state_code}).to_list()
    if ahjs:
        return ahjs
    return False

async def delete_ahj(id: PydanticObjectId) -> bool:
    ahj = await ahj_collection.get(id)
    if ahj:
        await ahj.delete()
        return True
    return False
    
async def update_ahj_data(id: PydanticObjectId, data: dict) -> Union[bool, Ahj]:
    des_body = {k: v for k, v in data.items() if v is not None}
    update_query = {"$set": {field: value for field, value in des_body.items()}}
    ahj = await ahj_collection.get(id)
    if ahj:
        await ahj.update(update_query)
        return ahj
    return False