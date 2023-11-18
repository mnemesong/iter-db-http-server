# list-db-server
http-server, runs list-db database


## Console run
Variant 1: run command: `npx iter-db-http-server [flags]`
Variant 2: create in package command: 
```json
//package.json
{
    ...
    "scripts": {
        ...
        "run:db": "iter-db-http-server [flags]"
    }
}
```
where flags is:
- `-at` - auth-token flag. Next command-line-parameter should be auth-token value. Else, it will be generated randomly.
- `-fp` - file-path flag. Next command-line-parameter should be absolute file-path to json storage, or relative file-path by package root.
- `-wd` - min delay before iterations of reserving data from memory to .json store file. Next command-line-parameter should be integer positive value in milliseconds.
- `-u` - unlink flag. Next command-line-parameter should be `0`(default) or `1`. If equals `1`, db event cycle will unlink and script may be finished.
- `-p` - port flag. Next command-line-parameter shpuel be port value.

#### Example of command
`npx iter-db-http-server -p 3000 -fp ./test.json -at as7g8-8dashg9`


## Commands
Commands to iter-db and details of working see here:
https://github.com/mnemesong/iter-db


## Author
Anatoly Starodubtsev
tostar74@mail.ru


## License
MIT