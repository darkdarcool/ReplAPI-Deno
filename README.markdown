<h1 align = "center"> 
  Replapi-Deno
</h1>


Replapi-Deno is an advanced client for getting _your_ replit data, fast.

## Usage

``` node
import replapi from 'https://deno.land/x/replapi_deno@v0.0.1/mod.ts';

replapi.getUser("TheDrone7").then((data) => {
  console.log(data);
});
```

And it will give you extensive data on the user here(and any you specify)! It returns a promise, which is reccommended you use **await**, or **then**.

That's it!
