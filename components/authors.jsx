export default function Authors({ date, children, by = "by" }) {
  return (
    <div className="mt-3 mb-12 text-gray-600 text-sm flex items-center gap-1">
      {date} {by} {children}
    </div>
  );
}

export function Author({ name, link }) {
  return (
    <span className="after:content-[','] last:after:content-[''] inline-flex items-center">
      <a
        key={name}
        href={link}
        target="_blank"
        className="mx-1 text-current hover:text-blue-600 transition-colors duration-200 flex items-center gap-2"
      >
        <img 
          src={`/resources/author/${name}.png`} 
          alt="Chat2DB"
          className="w-4 h-4 object-contain rounded-full" 
        />
        {name}
      </a>
    </span>
  );
}
