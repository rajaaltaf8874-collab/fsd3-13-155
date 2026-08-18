# FS (File System) Node JS's Module
it direct connect with client OS rather than browser
## Major tasks of FS Module
- Reading and Writing files
 - readFile()
 - writeFile()
 - appendFile()
- Directory Management
 - mkdir()
 - rmdir() - depricated
 - rm()
 - readdir()
- Metadata/Information
 - stat()
 - lstat()
 - fstat()
- watching for Changes
 - watch()
 - watchFile()
 - unwatchFile()
- Streaming Large File
 - createReadStream()
 - CreateWriteStream()
- File Operations
 - rename () 
 - truncate()
 - unlink()
 - link()
 - syslink()



 ## CRUD OPERATION
 Create/Insert,Read/Retrieve,Update,Delete
 each item(id,name,price,qty)

 ## Item
 id, name,price,qty

 ## operations

 1. add to cart
 2. show cart
 3. remove item from cart
 4. update quantity from cart
 5. checkout
 NOTE: all items will be stored in hdd, so after termination  of programs we can retrieve cart details

 ## Required Files
 1. crud.js - it contains all the methods and entry point
 2. products.json - it contains the product details in the array form