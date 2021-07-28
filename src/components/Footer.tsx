export default function Footer() {
  let date: Date = new Date();
  let year: number = date.getFullYear();

  return (
    <footer>
      <p>&copy;Copyright {year}</p>
    </footer>
  );
}
