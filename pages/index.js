
export default function Home() {
  const router = useRouter();
  const agenceRef = useRef(null);

  const search =(e) => {
  e.preventDefault(); 
  const term = agenceRef.current.value;
  const term1 =serviceseRef.current.value;
  const term2 =contactRef.current.value;
  if(!term) return;

router.push(`/agence?term=${term}`);

router.push(`/services?term=${term1}`);

router.push(`/contact?term=${term2}`);
  }
  return (
<main className="flex flex-col items-center justify-center" >
<div  className=''>
 <h1 className='flex flex-container items-center justify-center font-bold italic'> NOUVELLE ECOLE</h1>

</div>
</main>

  )
}
