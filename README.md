# Slingr
Binary Search Tree

## to install library's

```npm install```

## to start the proyect

```npm run start```

![image](https://user-images.githubusercontent.com/40775106/178167348-0e2c95bd-3c36-4931-800b-34583ddde079.png)

## to run the tests

```npm run test```

![image](https://user-images.githubusercontent.com/40775106/178167336-0c908485-8df3-4e59-9d2a-a0f7de85180a.png)

# Usage

### UI

![image](https://user-images.githubusercontent.com/40775106/178167440-c07c5dc1-3f92-42d4-9197-3da373fab357.png)

enter in the input the desired values, separated by commas, for example: **12,11,90,82,7,9**

![image](https://user-images.githubusercontent.com/40775106/178167499-d829f7a7-8f67-4fe5-90dd-9cea04cfa15e.png)

**Create tree**

![image](https://user-images.githubusercontent.com/40775106/178167513-8554630b-9829-4964-8f98-c037356460ba.png)

**Obtain Deepest Nodes with their Depth**

![image](https://user-images.githubusercontent.com/40775106/178167528-8cac2d0e-4bc2-4b8b-b3ba-83ad4d8b5cdd.png)

**Remove node**

![image](https://user-images.githubusercontent.com/40775106/178167544-9e9470ba-f13a-4ce1-8d94-580f7013e487.png)
![image](https://user-images.githubusercontent.com/40775106/178167552-2396af22-5f55-4b6e-85a3-fb60b309bde7.png)

**Search Node**

![image](https://user-images.githubusercontent.com/40775106/178167587-902c0f99-4c1a-4777-ad1b-b45cf9d9a066.png)
![image](https://user-images.githubusercontent.com/40775106/178167617-87ca75ac-85f6-4df1-adb9-917e70fda0b3.png)


### PostMan

**Create tree and return deepests nodes with their depth**

Endpoint: http://localhost:3000/deepest

Method: POST

Data: ```{
    "input": "[12,11,90,82,7,9]"
}```

Response: ```{"Deepest":[9],"Depth":3,"Tree":{"data":12,"left":{"data":11,"left":{"data":7,"left":null,"right":{"data":9,"left":null,"right":null}},"right":null},"right":{"data":90,"left":{"data":82,"left":null,"right":null},"right":null}}}```


![image](https://user-images.githubusercontent.com/40775106/178167815-4cc2bdab-67cc-491f-a41c-31db71bed1a5.png)

**Search Node**

Endpoint: http://localhost:3000/search

Method: POST

Data: ```{
    "input": "[12,11,90,82,7,9]",
    "data": 90
}```

![image](https://user-images.githubusercontent.com/40775106/178167901-47772126-55af-4aa3-ad02-aae47ef01146.png)


Response: ```{"Deepest":[null],"Depth":"","Tree":{"data":90,"left":{"data":82,"left":null,"right":null},"right":null}}```

**Remove Node**

Endpoint: http://localhost:3000/remove

Method: POST

Data: ```{
    "input": "[12,11,90,82,7,9]",
    "data": 90
}```

Response: ```{"Deepest":[null],"Depth":"","Tree":{"data":12,"left":{"data":11,"left":{"data":7,"left":null,"right":{"data":9,"left":null,"right":null}},"right":null},"right":{"data":82,"left":null,"right":null}}}```

![image](https://user-images.githubusercontent.com/40775106/178167930-ed5b2677-4310-4048-b07b-cd0f315df35b.png)





