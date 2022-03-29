# json2lines

This package is designed to take JSON files of any size with multiple
sub-documents and produce a JSONL or JSON Lines file from the data.
Take the example document:

```json
{
    "fruits": [
        {
            "name": "Apple",
            "color": "red"
        },
        {
            "name": "Orange",
            "color": "red"
        }
    ]
}
```

Run it through json2lines package:

```shell
# npx json2lines --input input.json --output output.jsonl --filter fruits.*
```

Will result in the following JSON Lines to the `output.jsonl` file:

```json
{"name":"Apple","color":"red"}
{"name":"Orange","color":"orange"}

```

## Filtering

In the example above, you can see we passed the filter `foods.*`. This tells
us to extract the object in the `foods` array in the root object. For this
functionality we make use of `JSONStream`. For more information on filters, you
can visit the documentation here:

https://github.com/dominictarr/JSONStream#jsonstreamparsepath

## Performance

Memory wise the program stays near baseline for Node.JS, with a 2.6GB file with
374k entries running at <50MB in the Task Manager on a Windows 10 x64 machine.
The file took roughly 6m40s on a AMD FX-8120 and Budget SSD doing both reads and
writes.
