# FileReader

The FileReader object lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using File or Blob objects to specify the file or data to read.

## properties 
 There are many properties but for now let's focus on

 ### FileReader.result 
    * The FileReader result property returns the file's contents.
    * *This property is only valid after the read operation is complete*
    * The format of the data depends on which of the methods was used to initiate the read operation. 
        * *MEthods availabel*
           * readAsArrayBuffer()
              * The result is a JavaScript ArrayBuffer containing binary data.

           * readAsBinaryString()
             * The result contains the raw binary data from the file in a string.
            
           * readAsDataURL()
              * The result is a string with a data: URL representing the file's data. 
           * readAsText()
              * The result is text in a string.


### FileReader.onload

  The FileReader.onload property contains an event handler executed <u>when the FileReader load_event event is fire</u>, when content read with readAsArrayBuffer, readAsBinaryString, readAsDataURL or readAsText is available

###  FileReader.addEventListerner("progress",callback)
  The progress event is fired periodically as the FileReader reads data.

# FormData

* The FormData interface provides a way to easily construct a set of key/value pairs representing form fields their values,

* which can then be easily sent using the XMLHttpRequest.send() method.

* It uses the same format a form would use if the encoding type were set to "multipart/form-data".

```
// Create a test FormData object
var formData = new FormData();
formData.append('key1', 'value1');
formData.append('key2', 'value2');

// Display the key/value pairs
for(var pair of formData.entries()) {
   console.log(pair[0]+ ', '+ pair[1]);
}
```