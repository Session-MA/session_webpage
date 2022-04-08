# session_webpage

## Prerequisites
run bash

## Quickstart
### Serve site locally
```
bundle exec jekyll serve --force_polling --livereload 
```

### Clean cache (css, js)
```
bundle exec jekyll clean
```



## Debug

In case of more than one instance running, you need to kill Jekyll running process then serve site again.

1. find the process you need to kill and keep its PID (process identifier)
```
ps aux | grep jekyll
```

2. kill the process by replacing PID by the process number 
```
kill -9 PID
```

3. Clean cache
```
bundle exec jekyll clean
```

4. Serve site locally
```
bundle exec jekyll serve --force_polling --livereload 
```
