package hello;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
public class HelloController {
    
    @RequestMapping("/ping")
    public String ping() {
        return "PONG!";
    }

    @PostMapping(value = "/ping", consumes = "text/plain")
    public String put(@RequestBody final String msg) {
        return msg.toUpperCase() + "PONG!";
    }

    @GetMapping("/web")
    public String getExternal() {
        return new RestTemplate().getForObject("https://elg.no", String.class);
    }
}
