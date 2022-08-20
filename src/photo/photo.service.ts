import { Injectable } from '@nestjs/common';
import {S3} from 'aws-sdk';

@Injectable()
export class PhotoService {
    constructor() {}
    
    async upload(files) {
        for(const file of files) {
            const {originalname} = file;
            const bucketS3 = 'en-overflow';
            await this.uploadS3(file.buffer, bucketS3, originalname);
        }
    }

    async uploadS3(file, bucket, name) {
        const s3 = this.getS3();
        const params = {
            Bucket: bucket,
            Key: String(name),
            Body: file
        };
        return new Promise((resolve, reject) => {
            s3.upload(params, (err, data) => {
                if(err) {
                    reject(err.message);
                }
                console.log(data);
                resolve(data);
            });
        })
    }

    getS3() {
        return new S3({
            accessKeyId: 'AKIAXIQX7NXOKG4UWLSA',
            secretAccessKey: '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'
        })
    }
}
