# Pauliceia 2.0

## How to run

1. Clone the repository

```
git clone https://github.com/Pauliceia/pauliceia
```

2. Download dependencies

```
yarn
```

3. `cd` into `backend` or `frontend`, depending on what you want to run

4. On the `backend`:
  * Run the server on develpment mode:
  ```
    yarn run start
  ```

  * Run the server on production mode:
  ```
    yarn run production
  ```

  * Run the test suite:
  ```
    yarn run test
  ```

  * Generate documentation:
  ```
    yarn run docs
  ```
  
4. On the `frontend`:
  * Run the website on develpment mode:
  ```
    yarn run dev
  ```

  * Build the website for production mode:
  ```
    yarn run build
  ```

5. On both `backend` and `frontend`:
  Whenever you commit something, always make sure to run `yarn run fmt` before
  committing. It ensures that the repository is always properly formatted.

