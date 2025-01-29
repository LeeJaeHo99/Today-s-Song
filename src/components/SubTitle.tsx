interface SubTitleProp{
    title: React.ReactNode;
}

export default function SubTitle({title}: SubTitleProp){
    return <h3 className="sub-title">{title}</h3>;
}