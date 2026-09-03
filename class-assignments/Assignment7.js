
async function getPosts() {

    try {

        
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        // Convert response into JSON
        const data = await response.json();
        console.log(data)

        
        for (const post of data) {

            console.log("Post ID:", post.id);
            console.log("User ID:", post.userId);
            console.log("Title:", post.title);
            console.log("Body:", post.body);
            console.log("--------------------");

        }

    } catch (error) {

        console.log("Error:", error.message);

    }
}

getPosts();