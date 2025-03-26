<script lang="ts">
  import type { ChatModel } from "$appRoutes/crud/chatDB";

  let { data } = $props();

  /* +page.svelte(データ送信) →
        +server.ts(各methodが受け取り処理) →
             chatDB.ts(切り分け処理) →
                 +server.ts(加工データを返す) →
                    +page.svelte(データ受け取り)
  */

  // ロード時に取得(+page.server.tsから)
  async function messagePost(event: KeyboardEvent) {
    if (event.key !== "Enter") return;

    const element = event.target as HTMLInputElement;
    const value = element.value;

    if (!value) return;

    //送信内容(+server.tsへ)
    const response = await fetch("/app/crud", {
      method: 'POST',
      body: JSON.stringify(value),
      headers: {
        'Content-Type': 'application/json',
      }
    });

    //レスポンス内容(+server.tsから)
    const result = await response.json();
    console.log(result);

    //ロード時取得データを更新
    data = {chatDataBase: [...result]};

    element.value = "";
  }

  async function messageDelete(id: string) {
    const response = await fetch("/app/crud", {
      method: 'DELETE',
      body: JSON.stringify(id),
      headers: {
        "Content-Type": "application/json",
      }
    });

    const result = await response.json();
    console.log(result);

    data = {chatDataBase: [...result]};
  }

  async function editToggle(id: string) {
    //取得(GET)
    const response = await fetch("/app/crud");
    //データ
    const result = await response.json();
    console.log(result);
    //特定のデータ切り出し
    const edited = result.map((chat: ChatModel) => chat.id === id ? {...chat, edit: true} : chat);
    //再代入更新
    data = {chatDataBase: edited};
  }

  async function messagePut(id: string, message: string) {
    const response = await fetch("/app/crud", {
      method: "PUT",
      body: JSON.stringify({id, message}),
      headers: {
        "Content-Type": "application/json",
      }
    });

    const result = await response.json();
    console.log(result);

    data = {chatDataBase: [...result]};
  }
</script>

<svelte:head>
  <title>crud</title>
  <meta name="description" content="crudについての勉強"/>
</svelte:head>

<div class="wrapper">
  <h3>CRUD</h3>
  <p>Create・Read・Update・Deleteの略称</p>
  <ul>
    <li>Create → POST</li>
    <li>Read → GET</li>
    <li>Update → PUT</li>
    <li>Delete → DELETE</li>
  </ul>

  <div class="contents">
    <label>
      送信メッセージ: <input type="text" autocomplete="off" onkeydown={messagePost}/>
    </label>

    {#each data.chatDataBase as chat (chat.id)}
      <div class="message">
        {#if chat.edit}
          <input type="text" bind:value={chat.message}/>
          <div>
            <button onclick={() => messagePut(chat.id, chat.message)}>保存</button>
          </div>
        {:else}
          <p>{chat.message}</p>
          <div>
            <button onclick={() => editToggle(chat.id)}>編集</button>
            <button onclick={() => messageDelete(chat.id)}>送信取消</button>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
    .wrapper {
        padding: 1rem;
    }

    .contents {
        margin: 1rem 0;
        padding: 1rem;
        box-shadow: 1px 2px 3px lightgray,
        1px 2px 3px lightgray inset;
        border-radius: 10px;

        .message {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid gray;
            padding: 0.25rem 0;
        }
    }

    h3 {
        margin-bottom: 0.5rem;
        color: #ff3c00;
        border-bottom: 2px dotted lightgray;
    }

    input {
        padding: 0.25rem 0.5rem;
        box-shadow: 1px 2px 3px lightgray,
        1px 2px 3px lightgray inset;
        border-radius: 5px;
    }

    button {
        margin: 0 0.2rem;
        padding: 0.1rem;
        border: 1px solid gray;
        border-radius: 5px;
    }

    ul {
        display: flex;
    }

    li {
        padding: 0 0.25rem;
        margin-right: 3rem;
        list-style: none;
    }

    li:nth-of-type(1) {
        background: #48ff00;
    }

    li:nth-of-type(2) {
        background: #1766F8FF;
    }

    li:nth-of-type(3) {
        background: #ffd816;
    }

    li:nth-of-type(4) {
        background: #ff0044;
    }
</style>