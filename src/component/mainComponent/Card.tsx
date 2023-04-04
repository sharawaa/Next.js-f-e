interface MovieType {
  title: string;
  poster: string;
}

export default function Card(props: MovieType): JSX.Element {
  return (
    <div className="w-[300px] h-[500px] text-red-500">
      <section>{props.title.slice(0, 20)}...</section>
      <img src={props.poster} className="w-full h-11/12" />
    </div>
  );
}
