async function main() {
  console.log("index.js: loaded");

  try {
    const userId = getUserId();
    const userInfo = await fetchUserInfo(userId);
    console.log("aaaaaaaaaaaa");
    const view = createView(userInfo);
    displayView(view);
  } catch (error) {
    console.log(`エラーが発生しました (${error})`);
  }
}

function fetchUserInfo(userId) {
  return fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
    .then(response => {
      console.log(response.status);
      // エラーレスポンスからRejectedなPromiseを作成して返す
      if (!response.ok) {
        return Promise.reject(new Error(`${response.status}: ${response.statusText}`));
      } else {
        return response.json()
      }
    });
}

function getUserId() {
  return document.getElementById("userId").value;
}

function createView(userInfo) {
  //  テンプレートリテラルのバッククォート記号の前に関数を書くと、関数をタグ関数として呼び出せる
  return escapeHTML`
            <h4>${userInfo.name} (@${userInfo.login})</h4>
            <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
            <dl>
              <dt>Location</dt>
              <dd>${userInfo.location}</dd>
              <dt>Repositories</dt>
              <dd>${userInfo.public_repos}</dd>
            </dl>
          `;
}

function displayView(view) {
  const result = document.getElementById("result");
  result.innerHTML = view;
}

function escapeSpecialChars(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// タグ関数には、第一引数に文字列リテラルの配列、第二引数に埋め込まれる値の配列が与えら
function escapeHTML(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i - 1];
    if (typeof value === "string") {
      return result + escapeSpecialChars(value) + str;
    } else {
      return result + String(value) + str;
    }
  });
}
