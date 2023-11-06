import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

export default function SizeChartPage() {
  return (
    <main className='max-w-[1000px] mx-auto px-5 flex flex-col justify-center items-center text-center gap-10 leading-10'>
      <header className='pt-48 py-10'>
        <h1 className='font-bold uppercase text-5xl xl:text-8xl'>Tough Size Charts</h1>
      </header>
      <section className='space-y-5' id='gloves'>
        <h2 className='font-bold text-lg'>BOXING GLOVES</h2>
        <p className='text-left'>Find your correct size in the size chart below. To measure the circumfrence of your hand, measure your hand around the palm, across the knuckles.</p>
        <Table>
          <TableHeader>
            <TableRow className='[&>th]:text-center'>
              <TableHead className='font-bold'>Size</TableHead>
              <TableHead>8–12 oz (S)</TableHead>
              <TableHead>12–14 oz (S/M)</TableHead>
              <TableHead>14–16 oz (M/L)</TableHead>
              <TableHead>16–18 oz (L)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className='font-bold'>Weight (lbs)</TableCell>
              <TableCell>up to 100</TableCell>
              <TableCell>101–150</TableCell>
              <TableCell>151–175</TableCell>
              <TableCell>over 175</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-bold'>Hand Circumference (in)</TableCell>
              <TableCell>5–6</TableCell>
              <TableCell>6–7.5</TableCell>
              <TableCell>7.5–8.5</TableCell>
              <TableCell>8.5–9.75</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
      <section className='space-y-5 py-10' id='headgear'>
        <h2 className='font-bold text-lg'>HEADGEAR</h2>
        <p className='text-left'>Find your correct size in the size chart below. Using a tape measure, measure the circumference of your head above the brow bone, around the widest part of the back of the head.</p>
        <Table>
          <TableHeader>
            <TableRow className='[&>th]:text-center'>
              <TableHead className='font-bold'>Size</TableHead>
              <TableHead>S</TableHead>
              <TableHead>M</TableHead>
              <TableHead>L</TableHead>
              <TableHead>XL</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className='font-bold'>Head Circumference (in)</TableCell>
              <TableCell>up to 21.5</TableCell>
              <TableCell>21.5–22.25</TableCell>
              <TableCell>22.25–23</TableCell>
              <TableCell>23 and up</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
      <section className='space-y-5 py-10' id='headgear'>
        <h2 className='font-bold text-lg'>HEAVY BAGS</h2>
        <p className='text-left'>TIt is recommended to use a heavy bag that is approximately half your weight. Find the right size heavy bag for you by using the chart below.</p>
        <Table>
          <TableHeader>
            <TableRow className='[&>th]:text-center'>
              <TableHead className='font-bold'>Size</TableHead>
              <TableHead>60 lbs.</TableHead>
              <TableHead>80 lbs.</TableHead>
              <TableHead>100 lbs.</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className='font-bold'>Your Weight (lbs)</TableCell>
              <TableCell>100–140</TableCell>
              <TableCell>145–160</TableCell>
              <TableCell>165–180</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-bold'>Your Height (in)</TableCell>
              <TableCell>up to 5&apos;5&qout;</TableCell>
              <TableCell>up to 5&apos;8&qout;</TableCell>
              <TableCell>6&apos; and up</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
      <section className='space-y-5 py-10' id='headgear'>
        <h2 className='font-bold text-lg'>SHOES</h2>
        <p className='text-left'>TThe measurements in the chart are foot measurements. Find your correct size in the size chart below.</p>
        <Table>
          <TableHeader>
            <TableRow className='[&>th]:text-center'>
              <TableHead className='font-bold'>Size (US Men)</TableHead>
              <TableHead>6</TableHead>
              <TableHead>7</TableHead>
              <TableHead>8</TableHead>
              <TableHead>9</TableHead>
              <TableHead>10</TableHead>
              <TableHead>11</TableHead>
              <TableHead>12</TableHead>
              <TableHead>13</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className='font-bold'>Size (US Women)</TableCell>
              <TableHead>7</TableHead>
              <TableHead>8</TableHead>
              <TableHead>9</TableHead>
              <TableHead>10</TableHead>
              <TableHead>11</TableHead>
              <TableHead>12</TableHead>
              <TableHead>13</TableHead>
              <TableHead>14</TableHead>
            </TableRow>
            <TableRow>
              <TableCell className='font-bold'>Size (EU</TableCell>
              <TableHead>39</TableHead>
              <TableHead>40</TableHead>
              <TableHead>41</TableHead>
              <TableHead>43</TableHead>
              <TableHead>44</TableHead>
              <TableHead>45</TableHead>
              <TableHead>46</TableHead>
              <TableHead>48</TableHead>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </main>
  )
}
