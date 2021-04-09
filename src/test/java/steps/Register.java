package steps;

import Utils.Global;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import general.RegisterPage;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import java.io.File;


import static org.testng.AssertJUnit.assertEquals;

public class Register {
    WebDriver driver;
    RegisterPage registerPage;

    public static void takeSnapShot(WebDriver webdriver,String fileWithPath) throws Exception{
        TakesScreenshot scrShot =((TakesScreenshot)webdriver);
        File SrcFile=scrShot.getScreenshotAs(OutputType.FILE);
        File DestFile=new File(fileWithPath);
        FileUtils.copyFile(SrcFile, DestFile);
    }
    @Before
    public void setup(){
        System.setProperty("webdriver.chrome.driver", Global.CHROME_DRIVER);
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        registerPage = new RegisterPage(driver);
    }

    @After
    public void tearDown(){
        driver.quit();
    }

    @Dado("^Que acesso o site de testes$")
    public void queAcessoOSiteDeTestes() throws Exception {
        driver.get(Global.URL);
        takeSnapShot(driver, "target/relatorioSimples.html/screenshots/telaInicial.png");
    }

    @Quando("^Eu digito no campo nome \"([^\"]*)\"$")
    public void euDigitoNoCampoNome(String nome) {
        registerPage.incluiNome(nome);

    }

    @E("^Digito no campo email \"([^\"]*)\"$")
    public void digitoNoCampoEmail(String email) {
        registerPage.incluiEmail(email);

    }

    @E("^Digito no campo senha \"([^\"]*)\"$")
    public void digitoNoCampoSenha(String senha) {
        registerPage.incluiSenha(senha);
    }

    @E("^Clico no botao cadastrar$")
    public void clicoNoBotaoCadastrar() {
        registerPage.cadastrar();
    }

    @Entao("^Salvo os dados na tabela nome \"([^\"]*)\" e email \"([^\"]*)\"$")
    public void salvoOsDadosNaTabelaNomeEEmail(String nome, String email) throws Exception {
        assertEquals(nome, this.registerPage.lerResultadoNomeCadastrado());
        assertEquals(email, this.registerPage.lerResultadoEmailCadastrado());
        String Value = this.registerPage.confirmaUsuario1().trim();
        String path = "target/relatorioSimples.html/screenshots/usuarioCadastrado" + Value + ".png";
        System.out.println(path);
        takeSnapShot(driver, path);

    }

    @Entao("^Verifico o erro gerado no campo nome$")
    public void verificoOErroGeradoNoCampoNome() throws Exception {
        assertEquals("Por favor, insira um nome completo.", this.registerPage.lerResultadoNameError());
        takeSnapShot(driver, "target/relatorioSimples.html/screenshots/usuarioNomeErrado.png");
    }

    @Entao("^Verifico o erro gerado no campo email$")
    public void verificoOErroGeradoNoCampoEmail() throws Exception {
        assertEquals("Por favor, insira um e-mail válido.", this.registerPage.lerResultadoEmailError());
        takeSnapShot(driver, "target/relatorioSimples.html/screenshots/usuarioEmailErrado.png");
    }

    @Entao("^Verifico o erro gerado no campo senha$")
    public void verificoOErroGeradoNoCampoSenha() throws Exception {
        assertEquals("A senha deve conter ao menos 8 caracteres.", this.registerPage.lerResultadoSenhaError());
        takeSnapShot(driver, "target/relatorioSimples.html/screenshots/usuarioSenhaErrada.png");
    }

    @Entao("^Verifico o erro gerado da falta de email$")
    public void verificoOErroGeradoDaFaltaDeEmail() throws Exception {
        assertEquals("O campo E-mail é obrigatório.", this.registerPage.lerResultadoEmailError());
        takeSnapShot(driver, "target/relatorioSimples.html/screenshots/usuarioSenhaFaltando.png");
    }

    @Entao("^Verifico o erro gerado da falta de senha$")
    public void verificoOErroGeradoDaFaltaDeSenha() throws Exception {
        assertEquals("O campo Senha é obrigatório.", this.registerPage.lerResultadoSenhaError());
        takeSnapShot(driver, "target/relatorioSimples.html/screenshots/usuarioEmailFaltando.png");
    }

    @Entao("^Verifico o erro gerado da falta de nome$")
    public void verificoOErroGeradoDaFaltaDeNome() throws Exception {
        assertEquals("O campo Nome é obrigatório.", this.registerPage.lerResultadoNameError());
        takeSnapShot(driver, "target/relatorioSimples.html/screenshots/usuarioNomeFaltando.png");
    }

    @E("^Digito um novo nome \"([^\"]*)\"$")
    public void digitoUmNovoNome(String nome) {
        this.registerPage.incluiNome(nome);
    }

    @E("^Digito um novo email \"([^\"]*)\"$")
    public void digitoUmNovoEmail(String email){
        this.registerPage.incluiEmail(email);
    }

    @Entao("^Salvo os dados do primeiro nome \"([^\"]*)\" e do nome \"([^\"]*)\"$")
    public void salvoOsDadosDoPrimeiroNomeEDoNome(String nome1, String nome2) throws Exception {
        assertEquals(nome1, this.registerPage.confirmaUsuario1());
        assertEquals(nome2, this.registerPage.confirmaUsuario2());
        takeSnapShot(driver, "target/relatorioSimples.html/screenshots/doisUsuariosCadastrados.png");
    }


    @E("^Deleto usuario \"([^\"]*)\"$")
    public void deletoUsuario(String id) {
        this.registerPage.deletarUser(id);
    }

    @Entao("^Verifico tabela com apenas o segundo usuario$")
    public void verificoTabelaComApenasOSegundoUsuario() throws Exception {
        assertEquals("2", this.registerPage.campoId2());
        takeSnapShot(driver, "target/relatorioSimples.html/screenshots/id2UsuarioCadastrado.png");

    }
}
