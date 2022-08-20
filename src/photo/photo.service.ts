import { Injectable } from '@nestjs/common';
import {S3} from 'aws-sdk';

@Injectable()
export class PhotoService {
    constructor() {}
    
    async upload(files) {
        let locations = [];
        
        for(const file of files) {
            const {originalname} = file;
            const bucketS3 = 'en-overflow';
            const s3JsonData = await this.uploadS3(file.buffer, bucketS3, originalname);
            locations.push(s3JsonData["Location"]);
        }
        return locations;
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
