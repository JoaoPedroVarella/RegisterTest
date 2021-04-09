package general;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class RegisterPage extends PageObject{
    @FindBy(id = "name")
    private WebElement txtNome;

    @FindBy(id = "email")
    private WebElement txtEmail;

    @FindBy(id = "password")
    private WebElement txtSenha;

    @FindBy(id = "register")
    private WebElement btnCadastrar;

    @FindBy(css = "div.App div:nth-child(1) div.register-form form:nth-child(2) div:nth-child(1) > p.error:nth-child(3)")
    private WebElement txtNameError;

    @FindBy(css = "div.App div:nth-child(1) div.register-form form:nth-child(2) div:nth-child(2) > p.error:nth-child(3)")
    private WebElement txtEmailError;

    @FindBy(css = "div.App div:nth-child(1) div.register-form form:nth-child(2) div:nth-child(3) > p.error:nth-child(3)")
    private WebElement txtSenhaError;

    //nome cadastrado na tabela
    @FindBy( id = "tdUserName1")
    private WebElement txtNomeCadastrado;

    //email cadastrado na tabela
    @FindBy(id = "tdUserEmail1")
    private WebElement txtEmailCadastrado;

    @FindBy(id = "tdUserName2")
    private WebElement txtNomeCadastrado2;

    @FindBy(id = "tdUserId2")
    private WebElement txtCampoId2;


    //construtor
    public RegisterPage(WebDriver driver){
        super(driver);
    }

    public String confirmaUsuario1(){
        return txtNomeCadastrado.getText();
    }

    public String confirmaUsuario2(){
        return txtNomeCadastrado2.getText();
    }
    public void incluiNome(String nome){
        txtNome.click();
        txtNome.sendKeys(nome);
    }

    public void incluiEmail(String email){
        txtEmail.click();
        txtEmail.sendKeys(email);
    }

    public void incluiSenha(String senha){
        txtSenha.click();
        txtSenha.sendKeys(senha);
    }

    //clicar no botão deletar na tabela
    public void deletarUser(String id){
        String fullId = "removeUser" + id;
        WebElement element = this.driver.findElement(By.id(fullId));
        element.click();
    }

    public String campoId2(){
        return txtCampoId2.getText();
    }

    public void cadastrar(){
        btnCadastrar.click();
    }

    public String lerResultadoNameError(){
        return txtNameError.getText();
    }

    public String lerResultadoEmailError(){
        return txtEmailError.getText();
    }

    public String lerResultadoSenhaError(){
        return txtSenhaError.getText();
    }

    public String lerResultadoNomeCadastrado(){
        return txtNomeCadastrado.getText();
    }

    public String lerResultadoEmailCadastrado(){
        return txtEmailCadastrado.getText();
    }

}
