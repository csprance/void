export class MailTemplateDoesNotExist extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MailTemplateDoesNotExist";
  }
}
