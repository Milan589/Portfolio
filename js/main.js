let jsondata = "";
let apiUrl = "https://api.github.com/users/Milan589"

async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}

async function main() {
    //OPTION 1
    // getJson(apiUrl)
    //     .then(data => console.log(data));

    //OPTION 2
    jsondata = await getJson(apiUrl)
    console.log(jsondata)
    let repo_url = jsondata['repos_url'];
    console.log(repo_url)
    // console.log(jsondata)
    // console.log(jsondata['avatar_url'])
    let user_name = "I'm  "+jsondata['name']
  //  document.getElementById('profile_img').src = jsondata['avatar_url']
    // return jsondata;
   // document.getElementById('full_name').textContent = user_name
  //  document.getElementById('github').href = jsondata['html_url']
    project_json = await getJson(repo_url)
    console.log(project_json)
    // let project_names = []
    // for (let i = 0; i < project_json.length; i++) {
    //     project_names.push(project_json[i]['name'])
    // }
    // console.log(project_names)
    let listContainer = document.createElement("DIV");
    listContainer.className = `listContainer`;

    project_json.forEach((item, index) => {

        let listItem = document.createElement("DIV");
        listItem.className = `listItem`;

        let name = document.createElement("DIV");
        name.className = `listName`;
        name.innerHtml = item.name

        let htmlUrl = document.createElement("DIV");
        htmlUrl.className = `htmlUrl`;

        let htmlUrlAnchor = document.createElement("A");
        htmlUrlAnchor.className = `htmlUrlAnchor`;
        htmlUrlAnchor.innerText = item.name;
        htmlUrlAnchor.href = item.html_url;

        htmlUrl.appendChild(htmlUrlAnchor);
        listItem.appendChild(htmlUrl);
        listContainer.appendChild(listItem);

    });
    document.querySelector('.injection').appendChild(listContainer);
}
main();