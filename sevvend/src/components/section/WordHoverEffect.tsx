type WHEProps = {
    word: string;
}

export default function WordHoverEffect( {word}: WHEProps ) {

  return (
    <div className="group flex cursor-pointer">
      {word.split("").map((char, i) => (
        <span
          key={i}
          className="relative inline-block overflow-hidden"
        >
          {/* lettre normale */}
          <span
            className="
              block 
              transition-transform 
              duration-300 
              group-hover:translate-y-full
            "
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {char}
          </span>

          {/* lettre qui descend */}
          <span
            className="
              absolute left-0 top-0 
              -translate-y-full 
              transition-transform 
              duration-300 
              group-hover:translate-y-0
            "
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {char}
          </span>
        </span>
      ))}
    </div>
  );
}