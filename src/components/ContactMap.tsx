interface ContactMapProps {
  address: string;
}

export default function ContactMap({ address }: ContactMapProps) {
  const query = encodeURIComponent(address);
  const src = `https://www.google.com/maps?q=${query}&output=embed`;

  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-luxury">
      <iframe
        title="Google Maps"
        src={src}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full border-0"
      />
    </div>
  );
}
