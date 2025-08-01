export type GenderType = "male" | "female" | "unknown";

export type PersonProps = {
  name: string;
  lastName: string;
  gender: GenderType;
};

const genderLabels = {
  female: "Женский",
  male: "Мужской",
  unknown: "Неизвестно",
};

const Person = ({ name, lastName, gender }: PersonProps) => {
  const genderLabel = genderLabels[gender];
  return (
    <div>
      <b>Имя: </b><span>{ name }</span><br />
      <b>Фамилия: </b><span>{lastName}</span><br />
      <b>Пол: </b><span>{genderLabel}</span>
      
    </div>
  );
};

export default Person