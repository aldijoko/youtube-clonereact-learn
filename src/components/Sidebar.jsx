import { Stack } from "@mui/material"

import { categories } from "../utils/constans"


const Sidebar = ({ selectedCategory, setSelectedCategory}) => (
    <Stack
        direction="row"
        sx={{
            overflowY: 'auto',
            height: {
                sx: 'auto',
                md: '95%',
            },
            flexDirection: { md: 'column' },
        }}>
        {categories.map((category) =>  (
            <button
                onClick={() => setSelectedCategory(category.name)}
                key={category.name}
                style={{background: category.name === selectedCategory ? '#ff0000' : ''}}
                className="ctgry-btn font-bold capitalize flex items-center justify-start cursor-pointer bg-transparent outline-none border-none rounded-xl my-2 py-1 px-3 text-white hover:bg-red-600 transition duration-300">
                <span
                    style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight: 15}}>{category.icon}</span>
                <span
                    style={{ opacity: category.name === selectedCategory ? '1' : '0.8'}}>{category.name}</span>
            </button>
        ))}
    </Stack>
)

export default Sidebar