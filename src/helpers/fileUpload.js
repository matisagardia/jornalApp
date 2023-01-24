
    export const fileUpload = async(file) => {

        if(!file) throw new Error('There is no file');

        const cloudUrl = 'https://api.cloudinary.com/v1_1/dnrlgdhxw/upload';

        const formdata = new FormData();
        formdata.append('upload_preset', 'journalApp');
        formdata.append('file', file);

        try {

            const resp = await fetch(cloudUrl, {
                method: 'POST',
                body: formdata
            });

            if(!resp.ok) throw new Error('Could not upload the image')

            const cloudResp = await resp.json();

            return cloudResp.secure_url;

            
        } catch (error) {
            throw new Error(error.message)
        }
        
    }