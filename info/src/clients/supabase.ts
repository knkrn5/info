
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

import { z } from 'zod';
import { userInfoSchema } from '../types';


export async function saveUserInfo(userInfoData: z.infer<typeof userInfoSchema>) {

    if (Object.keys(userInfoData).length === 0) {
        console.error("User info data is empty. Aborting save operation.");
        return;
    }

    const { data, error } = await supabase
        .from('user_info')
        .insert([userInfoData]);

    console.log(data)

    if (error) {
        console.error('Error inserting data:', error);
    } else {
        console.log('Data inserted:', data);
    }
}

const { data } = await supabase.from("user_info").select("*");

const parsedData = userInfoSchema.array().safeParse(data);


if (parsedData.success === false) {
    console.error("Data validation failed:", parsedData.error);
} else {
    console.log("Parsed data:", parsedData.data);
}
