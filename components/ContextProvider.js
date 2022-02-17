import React, { useState, createContext } from "react";
import { createBrowserHistory } from "history";

export const myContext = createContext();

export const ContextProvider = (props) => {
  const users = [
    {
      name: "Natalia",
      surename: "Puca",
      job: "nurse",
      age: "23",
      town: "Poznan",
      mail: "natalia@02.pl",
    },
    {
      name: "Ewa",
      surename: "Puca",
      job: "teacher",
      age: "40",
      town: "Poznan",
      mail: "ewa@02.pl",
    },
    {
      name: "Anna",
      surename: "Wolon",
      job: "teacher",
      age: "40",
      town: "Poznan",
      mail: "anna@02.pl",
    },
    {
      name: "Kasia",
      surename: "Nowik",
      job: "student",
      age: "20",
      town: "Poznan",
      mail: "kate@02.pl",
    },
    {
      name: "Cela",
      surename: "Morela",
      job: "student",
      age: "24",
      town: "Poznan",
      mail: "cela@02.pl",
    },
    {
      name: "Olga",
      surename: "Plewa",
      job: "student",
      age: "22",
      town: "Poznan",
      mail: "olga@02.pl",
    },
    {
      name: "Basia",
      surename: "Sosnowska",
      job: "student",
      age: "19",
      town: "Poznan",
      mail: "bacha@02.pl",
    },
    {
      name: "Marysia",
      surename: "Kucyk",
      job: "teacher",
      age: "43",
      town: "Gdynia",
      mail: "marysia@02.pl",
    },
    {
      name: "Dorota",
      surename: "Paduszynska",
      job: "teacher",
      age: "27",
      town: "Elblag",
      mail: "dotoka@02.pl",
    },
    {
      name: "Jadwiga",
      surename: "Porczynska",
      job: "nurse",
      age: "55",
      town: "Konin",
      mail: "jadzia@02.pl",
    },
    {
      name: "Iwona",
      surename: "Grabarek",
      job: "hairdresser",
      age: "55",
      town: "Konin",
      mail: "iwonka@02.pl",
    },
    {
      name: "Aleksandra",
      surename: "Woronin",
      job: "doctor",
      age: "29",
      town: "Warsaw",
      mail: "ola@02.pl",
    },
    {
      name: "Kamila",
      surename: "Nowka",
      job: "doctor",
      age: "32",
      town: "Warsaw",
      mail: "kamila@02.pl",
    },
  ];

  const posts = [
    {
      title: "What is Lorem Ipsum?",
      content:
        '"Sed ut perspiciatis unde omnis iste natuls error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"\n' +
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      mail: "natalia@02.pl",
    },
    {
      title: "Why do we use it?\n",
      content:
        "t is a long established fhct that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      mail: "natalia@02.pl",
    },
    {
      title: "Where does it come from?\n",
      content:
        '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"\n' +
        '\n"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"\n' +
        '\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n' +
        "\n",
      mail: "natalia@02.pl",
    },
    {
      title: "Where can I get some?\n",
      content:
        "There are many varihations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n" +
        "\n",
      mail: "natalia@02.pl",
    },
    {
      title: "The standard Lorem Ipsum passage, used since the 1500s\n",
      content:
        '"Lorem ipsum dohlor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."\n' +
        "\n",
      mail: "natalia@02.pl",
    },
    {
      title:
        'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC\n',
      content:
        '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"\n' +
        "\n",
      mail: "natalia@02.pl",
    },
    {
      title: "Where can I get some?\n",
      content:
        "There are manyg variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n" +
        "\n",
      mail: "ewa@02.pl",
    },
    {
      title: "The standard Lorem Ipsum passage, used since the 1500s\n",
      content:
        '"Lorem ipsumh dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."\n' +
        "\n",
      mail: "ewa@02.pl",
    },
    {
      title:
        'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC\n',
      content: "Sed ut pejrspiciatis oluptatem accusantium",
      mail: "ewa@02.pl",
    },
  ];

  const comments = [
    {
      title: "Not the biggest fan",
      target:
        '"Sed ut perspiciatis unde omnis iste natuls error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"\n' +
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      mail: "natalia@02.pl",
      content:
        "Nullam neque libero, finibus a semper vitae, mollis ac est. Donec pharetra arcu in laoreet accumsan. Vestibulum vel congue diam. Donec bibendum porttitor ipsum, a hendrerit eros. Duis at tempus massa. Integer ac ultricies ex. Cras porta dictum massa. Sed imperdiet blandit lobortis. Curabitur sodales neque eget neque mollis porttitor. Cras finibus urna arcu. Phasellus at lectus felis.\n" +
        "\n",
    },
    {
      title: "Very bright idea",
      target:
        "t is a long established fhct that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      mail: "natalia@02.pl",
      content:
        "Donec finibus, dui quis semper sagittis, dui nisi egestas felis, vel imperdiet mi felis a urna. Fusce egestas quam nunc, hendrerit luctus ex varius at. Suspendisse dignissim neque vitae purus pellentesque vestibulum. Phasellus luctus pellentesque purus, nec tempus mi sollicitudin ut. Sed sit amet placerat purus. ",
    },
    {
      title: "I love your workflow!",
      target:
        '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"\n' +
        '\n"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"\n' +
        '\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n' +
        "\n",
      mail: "natalia@02.pl",
      content:
        "Maecenas blandit porta lectus vel pulvinar. In posuere blandit molestie. Duis bibendum odio tortor, non porttitor tortor tincidunt at. Nunc malesuada neque lacus, ac bibendum purus commodo tincidunt. Suspendisse potenti. ",
    },
    {
      title: "We should all learn from you",
      target:
        "There are many varihations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n" +
        "\n",
      mail: "natalia@02.pl",
      content:
        "Vestibulum lobortis posuere mauris a ullamcorper. In iaculis leo eget bibendum ultrices. Morbi id pellentesque massa. Nunc accumsan arcu at ullamcorper mattis. Nunc bibendum libero id massa lobortis vestibulum. Maecenas vitae dui et dolor facilisis euismod. Duis dapibus eros in lectus laoreet, a pellentesque lorem placerat.\n" +
        "\n",
    },
    {
      title: "How can you be so narrow minded..",
      target:
        "There are many varihations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n" +
        "\n",
      mail: "natalia@02.pl",
      content:
        "Integer porta metus quis egestas fringilla. Aenean ullamcorper ante ac mi dignissim, mollis hendrerit nisi cursus. Morbi eu ex eget purus laoreet consequat ac nec nisi. Aenean augue ligula, maximus sed nisl vel, blandit volutpat ex. Sed efficitur molestie justo, at facilisis ante congue quis. Integer ac leo posuere, egestas sem a, euismod quam. Phasellus vel congue ex, nec semper dui.\n" +
        "\n",
    },
    {
      title: "Very missleading review",
      target:
        '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"\n' +
        "\n",
      mail: "natalia@02.pl",
      content:
        "Morbi vel elit suscipit, rhoncus magna ut, tincidunt dolor. Morbi nec posuere turpis, sit amet dapibus leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus condimentum vitae est eget hendrerit. Cras blandit turpis quis tortor maximus, eu auctor nibh pellentesque. Ut est tellus, congue nec est sit amet, aliquam rhoncus augue. Cras sit amet nisi facilisis, euismod massa ut, maximus sapien",
    },
    {
      title: "Simply good",
      target:
        "There are manyg variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n" +
        "\n",
      mail: "ewa@02.pl",
      content:
        "Pellentesque nisi mauris, interdum in hendrerit sit amet, elementum sed tortor. Aenean libero nisl, mollis vitae sagittis vitae, suscipit non quam. Aliquam varius fringilla orci vel porttitor. Fusce id nisl tellus. Morbi convallis fringilla eros nec interdum. In bibendum leo a ultricies dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus.\n" +
        "\n",
    },
    {
      title: "Very average vocabulary",
      target:
        '"Lorem ipsumh dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."\n' +
        "\n",
      mail: "ewa@02.pl",
      content:
        "Donec consectetur luctus enim, et fringilla arcu pretium nec. Duis nec maximus ex. Quisque finibus at ligula et dignissim. Phasellus et fringilla orci. Phasellus mattis quam nec felis dignissim aliquam. Cras non enim leo. Donec at tempor nisi, ac interdum massa.\n" +
        "\n",
    },
    {
      title: "Cant wait to read more of ypur articles!",
      target:
        '"Sed ut pejrspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"\n' +
        "\n",
      mail: "ewa@02.pl",
      content:
        "Phasellus et fringilla orci. Phasellus mattis quam nec felis dignissim aliquam. Cras non enim leo. Donec at tempor nisi, ac interdum massa.\n" +
        "\n",
    },
  ];

  const [userChosen, setUserChosen] = useState("");
  const [postChosen, setPostChosen] = useState("");
  const [commentChosen, setCommentChosen] = useState("");
  const [isModalShown, setIsModalShown] = useState(false);
  const [programUsers, setProgramUsers] = useState(users);
  const [programPosts, setProgramPosts] = useState(posts);
  const [programComments, setProgramComments] = useState(comments);

  return (
    <>
      <myContext.Provider
        value={{
          userChosen,
          programUsers,
          setUserChosen,
          setProgramUsers,
          programPosts,
          setProgramPosts,
          postChosen,
          setPostChosen,
          programComments,
          setProgramComments,
          commentChosen,
          setCommentChosen,
          isModalShown,
          setIsModalShown,
        }}
      >
        {props.children}
      </myContext.Provider>
    </>
  );
};
