** Data models (entites)

** Within our app we have the following data models (entities) that we will use
across the pages.

** Based on these models we will create a store to handle all the CRUD operations.

** CRUD stands for Create Read Update Delete (most of the entities have this)

** Feedback Model (Entity)
    Id
    Name
    Status (Optional)
    Description
    UpVotes
    TotalComments
    Comments (Optional)
    CategoryId
    UserId

** Comment Model (Entity)
    Id
    Description
    FeedbackId
    UserId

** Category Model (Entity)
    Id
    Name
    FeedbackId

** User Model (Entity)
    Id
    FullName
    Username
    Email 
    AvatarUrl (Optional)
