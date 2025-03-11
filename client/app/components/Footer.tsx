// app/components/Footer.tsx
export default function Footer() {
  return (
    <footer style={{
      marginTop: '2rem',
      textAlign: 'center',
      padding: '1rem',
      backgroundColor: '#1e1e1e'
    }}>
      <p>&copy; {new Date().getFullYear()} VOSTOK TRADE COMPANY. Все права защищены.</p>
    </footer>
  )
}