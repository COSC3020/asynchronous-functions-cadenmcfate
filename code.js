function countMatch(arr, key) 
{
  let promise = new Promise(function (resolve) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) if (arr[i] == key) count++;
    resolve(count);
  });
  return promise;
}

async function countAsync(arr, key, callback)
{
  let count = await countMatch(arr, key);
  callback(count);
}