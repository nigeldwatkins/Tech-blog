const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
];

const updateTechnologyPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#title-update-technology-post").value.trim();
    const content = document
    .querySelector("#content-update-technology-post")
    .value.trim();

    if (title && content) {
        const response = await fetch(`/api/post/${post_id}`, {
            method: "PUT",
            body: JSON.stringify({ title, content }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/dashboard");
        } else{
            alert("Couldnt update your post.");
        }
    }
};

const deleteTechnologyPostFormHandler = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/post/${post_id}`, {
        method: "DELETE",
    });

    if (response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert("Could delete your post.");
    }
};


const updateTechnologyPostButton = document.querySelector("#update-technology-post");
const deleteTechnologyPostButton = document.querySelector("#delete-technology-post");

if (updateTechnologyPostButton) {
    updateTechnologyPostButton.addEventListener("click", updateTechnologyPostFormHandler);
}

if (deleteTechnologyPostButton) {
    deleteTechnologyPostButton.addEventListener("click", deleteTechnologyPostFormHandler);
}
