# Simple TF code
resource "azurerm_resource_group" "main" {
  name     = var.rg-name
  location = "West Europe"
  tags = var.tags
}

resource "azurerm_cdn_profile" "main" {
  name                = "main-cdn"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  sku                 = "Standard_Verizon"
  tags = var.tags
}

resource "azurerm_cdn_endpoint" "main" {
  name                = "main"
  profile_name        = azurerm_cdn_profile.main.name
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name

  origin {
    name      = "main"
    host_name = "www.contoso.com"
  }
  tags = var.tags
}

variable "rg-name" {
  type = string
}

variable "tags" {
  type = map(string)
  default = {
    project = "prtest"
  }
}
