# persec2026-Web-dev-interview-kanrawee-karaboot

โจทย์ 6 ข้อ เขียนด้วย TypeScript แล้วเขียน test ด้วย Vitest

## วิธีรัน

```bash
npm install
npm test
```

คำสั่งอื่นที่ใช้ระหว่างทำ

- `npm run test q3` รันเฉพาะไฟล์ test ที่ชื่อมี q3
- `npm run typecheck` เช็กชนิดข้อมูลด้วย tsc
- `npm run demo` ลองเรียก function เองที่ `src/demo.ts`

## โครงสร้างโปรเจกต์
```text
src/
├── demo.ts                         # demo file
├── q1-brackets-check.ts            # Question 1: Bracket validator (Stack)
├── q2-sort.ts                      # Question 2: Natural alphanumeric sort
├── q3-autocomplete.ts              # Question 3: Autocomplete with priority ranking
├── q4-modern-roman-numerals.ts     # Question 4: Roman numeral converter (Int <-> Roman)
├── q5-sort-int-desc.ts             # Question 5: Sort digits descending
└── q6-tribonacci.ts                # Question 6: Tribonacci sequence
tests/
├── q1-brackets-check.test.ts            
├── q2-sort.test.ts                      
├── q3-autocomplete.test.ts              
├── q4-modern-roman-numerals.test.ts     
├── q5-sort-int-desc.test.ts             
└── q6-tribonacci.test.ts                
```

code อยู่ใน `src/` และ test อยู่ใน `tests/`

ทุกข้อมี test ที่เอาตัวอย่างจากโจทย์มาใส่ และมีการเพิ่ม case อื่นๆ เพิ่มเติมตามที่เห็นสมควร

## ข้อ 1 - ตรวจสอบวงเล็บ

ใช้ Loop ในการวนรอบ string ที่รับเข้ามาและตรวจสอบว่าเป็นวงเล็บเปิดหรือไม่ ถ้าเป็นให้เก็บเข้า stack ถ้าไม่เป็น ให้ตรวจสอบต่อว่าเป็นวงเล็บปิดหรือไม่ ถ้าใช่ให้ pop stack ออกมาเพื่อเช็คว่าเป็นคู่ตัวเองหรือไม่ ถ้าไม่ใช่ return false และสุดท้ายถ้า stack เป็น empty จะหมายถึงวงเล็บเปิดและปิดครบทุกคู่ และรองรับเคสที่เป็นตัวอักษรอื่นหรือส่ง empty string มา

- ข้อความว่างตอบ false
- ความยาวเป็นเลขคี่ตอบ false ทันที
- ถ้ามีตัวอักษรอื่นนอกจาก `( ) [ ] { }` ตอบ false

## ข้อ 2 - เรียงข้อความ

ใช้ spread operator เพื่อไม่ให้แก้ array ต้นฉบับแล้วจึงใช้ Array.sort() โดยใช้ localeCompare โดยใช้ params undefined -> ใช้ machine locale / numeric -> true เพื่อให้เรียงตัวเลขจากน้อยไปมาก และ sensitivity ->  base เพื่อ ignore case

- ไม่สนตัวพิมพ์เล็กใหญ่ (sensitivity:'base')
- ตัวที่เทียบแล้วเท่ากันจะอยู่ตามลำดับเดิม


## ข้อ 3 - autocomplete

ใช้ Array.filter ในการกรอง items ที่มีตัวอักษรที่ต้องการ และนำไปเรียงตามลำดับในคำ (ต้น/กลาง/ท้าย) โดยเรียก function getMatchGroup ที่ใช้เงื่อนไข startsWith (return 0) / endsWith (return 2) หากไม่ใช่ทั้งคู่ return 1 และนำผลลัพธ์นี้ ไปเข้า Array.sort() เพื่อเรียงข้อมูล

- คำที่อยู่กลุ่มเดียวกันเรียงตามลำดับเดิมใน array
- คำที่ทั้งขึ้นต้นและลงท้ายด้วย search นับเป็นกลุ่มขึ้นต้น
- ตอบ `[]` เมื่อ maxResult เป็น 0 หรือติดลบ, search ว่าง, items ว่าง หรือไม่เจอคำที่ตรง

## ข้อ 4 - เลขโรมัน

`numberToRoman`
สร้างตาราง ROMAN_STEPS เพื่อเป็นข้อมูลในการแปลงตัวเลขเป็นเลขโรมัน และเมื่อรับค่าตัวเลขเข้ามา ใช้ for และ while loop วนลดค่าตัวเลขตาม step และเอาตัวเลขโรมันต่อกันใน result เรื่อยๆ จนกว่าจะครบตามจำนวนที่รับเข้ามา และ return ตัวเลขโรมันกลับไปในรูปแบบ string

 - ถ้าไม่ใช่จำนวนเต็มบวก ให้ throw Error

`romanToNumber` 
รับตัวเลขโรมันเข้ามาในแบบ string และทำการ make sure ว่าเป็นตัวพิมพ์ใหญ่โดยใช้ toUpperCase(); จากนั้นตรวจสอบว่าเป็น empty string หรือไม่ ถ้าเป็นให้ throw error ออกไป หลังจากนั้น ให้เริ่มทำการแปลงเลขโรมันให้กลายเป็นตัวเลข โดยใช้ for loop วนจากซ้ายไปขวา นำเลขโรมันในแต่ละรอบและตัวถัดไป ไปเรียก getValue() เพื่อดูว่าตัวเลขโรมันนี้มีค่าเท่าไหร่ ถ้าตัวปัจจุบันน้อยกว่าตัวถัดไปให้ลบออกจาก total ถ้าไม่ให้บวกเพิ่ม และ return ผลรวมกลับไป

- รับตัวพิมพ์เล็กได้ 
- ถ้าเป็นสตริงว่างหรือมีตัวที่ไม่ใช่เลขโรมันจะ throw error

## ข้อ 5 - เรียงตัวเลขจากมากไปน้อย
รับตัวเลขเข้ามาและทำการตรวจสอบว่าเป็น positive integer หรือไม่ ถ้าไม่ใช่ให้ throw error หลังจากนั้นทำการแปลงตัวเลขเป็น string จับแยกด้วย split() และเรียงจากมากไปน้อยโดยแปลงเป็นตัวเลข จากนั้นนำมา join กันและแปลงกลับเป็น Int และ return กลับไปใน type number

- รับเฉพาะจำนวนเต็มบวก ถ้าเป็น 0, ติดลบ หรือทศนิยมจะ throw error

## ข้อ 6 - Tribonacci

รับค่า ชุดตัวเลขและจำนวนที่ต้องการเข้ามา ทำการแยกเช็คโดย
ชุดตัวเลข: ตรวจสอบว่ามีความยาวมากกว่า 3 หรือไม่ ถ้าเกิน ให้ throw error
จำนวนที่ต้องการ: เช็คว่าเป็นจำนวนเต็มที่ไม่ติดลบหรือไม่ ถ้าไม่ใช่ให้ throw error
หลังจากนั้น ใช้ spread operator เพื่อไม่ให้แก้ array ต้นฉบับแล้วจึงนำไปเข้า while loop ด้วยเงื่อนไขว่าชุดตัวเลขยาวน้อยกว่าจำนวนที่ต้องการหรือไม่ ถ้ายังน้อยกว่าแสดงว่ายังไม่ครบ ให้ทำการดึง 3 ค่าสุดท้ายของ array ที่ copy มาบวกกันและ push เป็นตัวถัดไป จนกว่าจำนวน element ของ array จะยาวเท่าจำนวนที่ต้องการ และทำการ return ค่าที่จัดการแล้ว โดยใช้ slice เพื่อ make sure ว่าความยาวของ array ยาวเท่า count จริงๆ

- ค่าเริ่มต้นมีได้ 0-3 ตัว มากกว่านั้นจะ throw error
- ถ้าค่าเริ่มต้นมีน้อยกว่า 3 ตัว ให้บวกเท่าที่มี ตัวที่ยังไม่มีนับเป็น 0 เช่น `([1, 2], 5)` ได้ `[1, 2, 3, 6, 11]` และ `([], 3)` ได้ `[0, 0, 0]`
- count ต้องเป็นจำนวนเต็มไม่ติดลบ ไม่งั้น throw error
- ถ้า count น้อยกว่าจำนวนค่าเริ่มต้น จะคืนแค่ count ตัวแรก