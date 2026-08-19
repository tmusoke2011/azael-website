# Website intake spreadsheet connection

The website submits Enterprise Discovery and capital-provider partnership enquiries to a Google Apps Script web app. The script validates a server-only secret and appends accepted submissions to the `Submissions` or `Provider Enquiries` tab.

## 1. Add the script to the spreadsheet

1. Open **Azael Enterprise Discovery Intake**.
2. Choose **Extensions → Apps Script**.
3. Replace the contents of `Code.gs` with the contents of this folder's `Code.gs` file.
4. Save the project as **Azael Website Intake Webhook**.

## 2. Configure script properties

In **Project Settings → Script properties**, add:

- `SPREADSHEET_ID`: `1tWK_j5BRG4kzmMQpiMBkfFQd2R3ZqU03kZImDWdjuv4`
- `WEBHOOK_SECRET`: a randomly generated secret of at least 32 characters

Do not put the secret in source control or share it in a message.

## 3. Deploy the web app

1. Choose **Deploy → New deployment**.
2. Select **Web app**.
3. Set **Execute as** to **Me**.
4. Set **Who has access** to **Anyone**.
5. Deploy and copy the `/exec` web-app URL.

### Updating the existing web app

When replacing an earlier version of `Code.gs`:

1. Save the updated script.
2. Choose **Deploy → Manage deployments**.
3. Open the existing web-app deployment and choose **Edit**.
4. Select **New version**, then choose **Deploy**.

The existing `/exec` URL remains in use, so the website environment variables do not need to change.

## 4. Configure the website preview

In the Azael Vercel project's Preview environment, add:

- `AZAEL_INTAKE_WEBHOOK_URL`: the Apps Script `/exec` URL
- `AZAEL_INTAKE_WEBHOOK_SECRET`: the same secret stored in Script properties

Redeploy the preview branch after adding the variables. Add the same values to Production only after the complete submission journey has been tested and approved.
