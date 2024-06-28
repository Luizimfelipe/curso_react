import MyComponents from "./MyComponents";

const TemplateExpressions = () => {
    const name = "Luiz";
    const data = {
        age: 40,
        job:    "programmer",
    };

    return (
        <div>
            <h1>olá {name}, tudo bem?</h1>
            <p>voce atua como: {data.job}</p>
            <p>{4+4}</p>
            <MyComponents />
        </div>
    );

};

export default TemplateExpressions;