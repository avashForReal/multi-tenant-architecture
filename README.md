### multi tenant architecture
# barebones express and mongodb app implementing multi tenant architecture


POST: 
```
    localhost:3000/tasks?db='your-test-db'
```
```
    {
        task_name: "test task"
    }
```

GET: localhost:3000/tasks?db='your-test-db'