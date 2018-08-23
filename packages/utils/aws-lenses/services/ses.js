import compose from "ramda/es/compose";
import lensProp from "ramda/es/lensProp";
export const mail = lensProp('mail');
export const messageId = compose(mail, lensProp('messageId'));
export const receipt = lensProp('receipt');
export const recipients = compose(receipt, lensProp('recipients'));
export const action = compose(receipt, lensProp('action'));
export const actionBucketName = compose(action, lensProp('bucketName'));
export const actionObjectKey = compose(action, lensProp('objectKey'));